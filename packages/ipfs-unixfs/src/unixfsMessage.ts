export const unixfsMessage = {
  options: {
    syntax: 'proto3'
  },
  nested: {
    Data: {
      oneofs: {
        _Type: {
          oneof: ['Type']
        },
        _Data: {
          oneof: ['Data']
        },
        _filesize: {
          oneof: ['filesize']
        },
        _hashType: {
          oneof: ['hashType']
        },
        _fanout: {
          oneof: ['fanout']
        },
        _mode: {
          oneof: ['mode']
        },
        _mtime: {
          oneof: ['mtime']
        }
      },
      fields: {
        Type: {
          type: 'DataType',
          id: 1,
          options: {
            proto3_optional: true
          }
        },
        Data: {
          type: 'bytes',
          id: 2,
          options: {
            proto3_optional: true
          }
        },
        filesize: {
          type: 'uint64',
          id: 3,
          options: {
            proto3_optional: true
          }
        },
        blocksizes: {
          rule: 'repeated',
          type: 'uint64',
          id: 4
        },
        hashType: {
          type: 'uint64',
          id: 5,
          options: {
            proto3_optional: true
          }
        },
        fanout: {
          type: 'uint64',
          id: 6,
          options: {
            proto3_optional: true
          }
        },
        mode: {
          type: 'uint32',
          id: 7,
          options: {
            proto3_optional: true
          }
        },
        mtime: {
          type: 'UnixTime',
          id: 8,
          options: {
            proto3_optional: true
          }
        },
        mimeTypes: {
          rule: 'repeated',
          type: 'string',
          id: 9
        }
      },
      nested: {
        DataType: {
          values: {
            File: 2,
            Raw: 0,
            Directory: 1,
            Metadata: 3,
            Symlink: 4,
            HAMTShard: 5
          }
        }
      }
    },
    UnixTime: {
      oneofs: {
        _Seconds: {
          oneof: ['Seconds']
        },
        _FractionalNanoseconds: {
          oneof: ['FractionalNanoseconds']
        }
      },
      fields: {
        Seconds: {
          type: 'int64',
          id: 1,
          options: {
            proto3_optional: true
          }
        },
        FractionalNanoseconds: {
          type: 'fixed32',
          id: 2,
          options: {
            proto3_optional: true
          }
        }
      }
    },
    Metadata: {
      oneofs: {
        _MimeType: {
          oneof: ['MimeType']
        }
      },
      fields: {
        MimeType: {
          type: 'string',
          id: 1,
          options: {
            proto3_optional: true
          }
        }
      }
    }
  }
}
