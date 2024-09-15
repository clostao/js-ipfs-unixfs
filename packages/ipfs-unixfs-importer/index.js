import { randomBytes } from "crypto";
import { createReadStream } from "fs";
import { MemoryBlockstore } from "blockstore-core";
import { exporter } from "ipfs-unixfs-exporter";
import { importer } from "ipfs-unixfs-importer";

async function main() {
  const blockstore = new MemoryBlockstore();
  const stream = createReadStream("1M_file.bin");
  const data = Array.from({ length: 1000 })
    .fill(null)
    .map(() => ({
      content: stream,
      path: `adios/hola/${randomBytes(10).toString("hex")}`,
      mimeTypes: ["text/plain"],
    }));

  let last;
  for await (const _ of importer(data, blockstore, {
    shardSplitThresholdBytes: 10 * 1024,
  })) {
    last = _.cid.toString();
  }

  stream.close();

  const entry = await exporter(last, blockstore);

  console.log(JSON.stringify(entry.unixfs, null, 2));
}

main();
