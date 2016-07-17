# rest-serveur

Installation :
```bash
npm install
grunt
```

Lancement :
```bash
sails lift
```

Créer un utilisateur :
```bash
POST /user
email:myemail
password:password
```

Login :
```bash
POST /login
email:myemail
password:password
```

Logout :
```bash
GET /logout
```