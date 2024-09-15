import { fileTypeFromBuffer, fileTypeFromStream } from "file-type";

console.log(
  await fileTypeFromBuffer(
    await fetch(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
    ).then((res) => res.arrayBuffer())
  )
);
