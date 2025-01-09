import {readBlockConfig} from "../../scripts/aem";

export default async function decorate(block) {
  const config = readBlockConfig(block);
  console.log(config);
}