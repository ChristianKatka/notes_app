
pip3 install -r requirements.txt
pip install -r requirements.txt



pip freeze > requirements.txt



"build again " upon changes
FLASK_APP=app.py FLASK_ENV=development 

python3 -m venv env 
virtualenv env --python=python3.9
source env/bin/activate

#install
pip3 install python-dotenv
pip3 install flask
pip3 install boto3

<!-- BUILD APP -->
pip3 install zappa
zappa init
zappa deploy dev

python3 -m pip install python-dotenv


flask run
deactivate