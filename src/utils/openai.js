import OpenAI from 'openai';
import { open_ai_gpt } from '../constants/file';
const openai = new OpenAI({
  apiKey:open_ai_gpt, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser:true
});

export default openai;