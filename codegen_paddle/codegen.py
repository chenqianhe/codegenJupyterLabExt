import time
import paddle
from paddlenlp.utils.log import logger
from paddlenlp.transformers import CodeGenTokenizer, CodeGenForCausalLM

from .config import DefaultConfig

generate_config = DefaultConfig()
paddle.set_device(generate_config.device)
paddle.set_default_dtype(generate_config.default_dtype)

tokenizer = CodeGenTokenizer.from_pretrained(generate_config.model_name_or_path)
model = CodeGenForCausalLM.from_pretrained(
    generate_config.model_name_or_path,
    load_state_as_np=generate_config.load_state_as_np)


def gen_code(prompt: str) -> str:
    start_time = time.time()
    logger.info("Start generating code")
    tokenized = tokenizer(prompt,
                          truncation=True,
                          return_tensors='pd')
    output, _ = model.generate(
        tokenized["input_ids"],
        max_length=16,
        min_length=generate_config.min_length,
        decode_strategy=generate_config.decode_strategy,
        top_k=generate_config.top_k,
        repetition_penalty=generate_config.repetition_penalty,
        temperature=generate_config.temperature,
        use_faster=generate_config.use_faster,
        use_fp16_decoding=generate_config.use_fp16_decoding)
    logger.info("Finish generating code")
    end_time = time.time()
    logger.info(f"Time cost: {end_time - start_time}")
    output = tokenizer.decode(output[0], skip_special_tokens=True)
    logger.info(f"Generated code: {output}")
    return output
