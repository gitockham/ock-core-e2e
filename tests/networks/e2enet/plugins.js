module.exports = {
  '@arkecosystem/core-event-emitter': {},
  '@arkecosystem/core-config': {},
  '@arkecosystem/core-logger-winston': {
    transports: {
      console: {
        options: {
          level: process.env.OCK_LOG_LEVEL || 'debug'
        }
      },
      dailyRotate: {
        options: {
          level: process.env.OCK_LOG_LEVEL || 'debug',
          filename: process.env.OCK_LOG_LEVEL || `${process.env.OCK_PATH_DATA}/logs/core/${process.env.OCK_NETWORK_NAME}/current.log`
        }
      }
    }
  },
  '@arkecosystem/core-database-postgres': {
    connection: {
      host: 'postgres',
      port: process.env.OCK_DB_PORT || 5432,
      database: process.env.OCK_DB_DATABASE || `ock_testnet`,
      user: process.env.OCK_DB_USERNAME || 'ock',
      password: process.env.OCK_DB_PASSWORD || 'password'
    }
  },
  '@arkecosystem/core-transaction-pool-mem': {
    enabled: true,
    storage: `${process.env.OCK_PATH_DATA}/database/transaction-pool-${process.env.OCK_NETWORK_NAME}.sqlite`,
    maxTransactionsPerSender: process.env.OCK_TRANSACTION_POOL_MAX_PER_SENDER || 300,
    whitelist: [],
    allowedSenders: [],
    maxTransactionsPerRequest: 200,
    maxTransactionAge: 21600
  },
  '@arkecosystem/core-p2p': {
    host: process.env.OCK_P2P_HOST || '0.0.0.0',
    port: process.env.OCK_P2P_PORT || 4000,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1', '192.168.*'],
    rateLimit: {
      enabled: true,
      pathLimit: false,
      userLimit: 200,
      userCache: {
        expiresIn: 1000,
      },
      ipWhitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
    }
  },
  '@arkecosystem/core-blockchain': {
    fastRebuild: false
  },
  '@arkecosystem/core-api': {
    enabled: !process.env.OCK_API_DISABLED,
    host: process.env.OCK_API_HOST || '0.0.0.0',
    port: process.env.OCK_API_PORT || 4003,
    whitelist: ['*']
  },
  '@arkecosystem/core-webhooks': {
    enabled: process.env.OCK_WEBHOOKS_ENABLED,
    database: {
      dialect: 'sqlite',
      storage: `${process.env.OCK_PATH_DATA}/database/${process.env.OCK_NETWORK_NAME}/webhooks.sqlite`,
      logging: process.env.OCK_DB_LOGGING
    },
    server: {
      enabled: process.env.OCK_WEBHOOKS_API_ENABLED,
      host: process.env.OCK_WEBHOOKS_HOST || '0.0.0.0',
      port: process.env.OCK_WEBHOOKS_PORT || 4004,
      whitelist: ['127.0.0.1', '::ffff:127.0.0.1', '192.168.*']
    }
  },
  '@arkecosystem/core-graphql': {
    enabled: process.env.OCK_GRAPHQL_ENABLED,
    host: process.env.OCK_GRAPHQL_HOST || '0.0.0.0',
    port: process.env.OCK_GRAPHQL_PORT || 4005,
    path: '/graphql',
    graphiql: true
  },
  '@arkecosystem/core-forger': {
    hosts: [`http://127.0.0.1:${process.env.OCK_P2P_PORT || 4000}`]
  },
  '@arkecosystem/core-json-rpc': {
    enabled: process.env.OCK_JSON_RPC_ENABLED,
    host: process.env.OCK_JSON_RPC_HOST || '0.0.0.0',
    port: process.env.OCK_JSON_RPC_PORT || 8080,
    allowRemote: true,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1', '192.168.*'],
    database: {
      uri: process.env.OCK_JSON_RPC_DATABASE || `sqlite://${process.env.OCK_PATH_DATA}/database/json-rpc.sqlite`,
      options: {}
    }
  }
}
