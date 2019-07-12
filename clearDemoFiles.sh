echo Remove all demo files

read -p "Are you sure? (y/n)" -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

echo Remove models
rm ./model/User.js

echo Remove routes
rm ./routes/user.js

echo Remove validations
rm ./validations/index.js
rm ./validations/user.js

echo Remove helpers
rm ./helpers/verifyJwt.js

echo Remove clearDemoFiles script
rm ./clearDemoFiles.sh

echo All demo files have been removed!
