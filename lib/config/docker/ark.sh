echo "Starting ock" >> output.log
OCK_LOG_FILE=ock.log packages/core/bin/ock start --config packages/core/lib/config/e2enet --network e2enet >> output.log 2> errors.log &
echo kill -2 $! > killpid.sh
pwd >> output.log
cat killpid.sh >> output.log
echo "Started ock" >> output.log
