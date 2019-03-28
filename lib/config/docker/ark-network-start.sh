echo "Starting ock --network-start" >> output.log
OCK_LOG_FILE=ock.log packages/core/bin/ock start --config packages/core/lib/config/e2enet --network e2enet --network-start >> output.log 2> errors.log
echo "Started ock --network-start" >> output.log
