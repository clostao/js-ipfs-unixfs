'use strict'

module.exports = `message Data {
  enum DataType {
    Raw = 0;
    Directory = 1;
    File = 2;
    Metadata = 3;
    Symlink = 4;
    HAMTShard = 5;
  }

  required DataType Type = 1;
  optional bytes Data = 2;
  optional uint64 filesize = 3;
  repeated uint64 blocksizes = 4;
  optional uint64 hashType = 5;
  optional uint64 fanout = 6;
  optional Mode mode = 7;
  optional Mtime mtime = 8;
}

message Metadata {
  required string MimeType = 1;
}

message Mode {
  required uint32 value = 1;
}

message Mtime {
  required int64 value = 1;
  repeated int64 hrValue = 1;
}`
