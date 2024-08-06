from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:password@localhost/postgres'
db=SQLAlchemy(app)
with app.app_context():
    db.create_all()
            
class Data(db.Model):
    __tablename__="data"
    id=db.Column(db.Integer,primary_key=True)
    name_=db.Column(db.String(120))
    age_=db.Column(db.Integer)
    city_=db.Column(db.String(120))
    email_=db.Column(db.String(120))
    
    def __init__(self, name_, age_, city_, email_):
        self.name_=name_
        self.age_=age_
        self.city_=city_
        self.email_=email_
        

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/roster", methods=['POST'])
def roster():
    if request.method=='POST':
        name=request.form["name_name"]
        age=request.form["age_name"]
        city=request.form["city_name"]
        email=request.form["email_name"]
        
        
        data=Data(name, age, city, email )
        db.session.add(data)
        db.session.commit()
            
        retrieveData = Data.query.all()
        
        return render_template("roster.html", retrieveData = retrieveData)


if __name__=='__main__':
    app.debug=True
    app.run()
    
    