import {readBlockConfig} from "../../scripts/aem.js";

export default async function decorate(block) {
  const config = readBlockConfig(block);
  console.log(config);
  console.log(config['quote']);
  console.log(config.quote);


}