========== Update Package ==========
npm install

========== SET mysql cred in .env ==========


========== Update Models ==========
sequelize-auto -o "./models" -d user_data -h localhost -u root -p 3306 -x  -e mysql -t tbl_user


========== Start Project ==========
node server

