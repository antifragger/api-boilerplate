echo Remove all demo files

read -p "Are you sure? (y/n)" -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

echo Remove models
rm ./src/model/User.js

echo Remove routes
rm ./src/routes/user.js

echo Remove validations
rm ./src/validations/index.js
rm ./src/validations/user.js

echo Remove helpers
rm ./src/helpers/verifyJwt.js

echo Remove clearDemoFiles script
rm ./clearDemoFiles.sh

echo All demo files have been removed!
