<h1>DEVELOPER GUIDES</h1>
<h4>Local environment requirements</h4>
<ol>
<li>Php 7.2.5 +</li>
<li>Composer</li>
<li>Git</li>
<li>Node</li>
<li>Npm</li>
<li>linux *optional</li>
<li>Sqlite</li>
<li>PHP extc:
BCMath PHP Extension
Ctype PHP Extension
Fileinfo PHP extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP ExtensionBCMath PHP Extension
Ctype PHP Extension
Fileinfo PHP extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP Extension</li>
</ol>
<hr>
<h4>App build commands</h4>
<pre><code>    git clone https://github.com/mikolajborowski/WSBGroupProject.git
    cd WSBGroupProject
    composer install 
    touch .env
    cp .env.example .env 
    touch database/database.sqlite
    php artisan migrate 
    npm install 
    npm run dev 
    php artisan serve 
    Site available on http://127.0.0.1:8000/
</code></pre>
<hr>
<h4>FOR FRONT END</h4>
<p>React is set up and ready in .\resources\js
Component mount .\resources\views\welcome.blade.php</p>
<hr>
<h4>REST API</h4>
<h6>Authentication</h6>
<hr>
<ol>
<li>Register
METHOD: POST
Endpoint : 127.0.0.1:8000/api/register
Payload (Form data):
name: {user}
email: {email}
password: {password}
password_confirmation: {password}
Return:</li>
</ol>
<pre><code>{
    "user": {
        "name": {user},
        "email": {email},
        "updated_at": {date},
        "created_at": {date},
        "id": {id}
    },
    "token": {token}
}
</code></pre>
<hr>
<ol start="2">
<li>Login
Endpoint : 127.0.0.1:8000/api/login
Method: POST
Payload (Form data):
email: {email}
password: {password}
Return:</li>
</ol>
<pre><code>{
    "token": {token}
}
</code></pre>
<h6>User</h6>
<ol>
<li>Get info about user
Endpoint : 127.0.0.1:8000/api/user
Method: GET
HEADERS:
Authorization: Bearer {token}
Return:</li>
</ol>
<pre><code>{
    "user": {
        "id": {id},
        "name": {name},
        "email": {email},
        "email_verified_at": {date},
        "is_user_admin": {boolean or null},
        "created_at": {date},
        "updated_at": {date}
    }
}
</code></pre>
<hr>
<ol start="2">
<li>Update info about user
Endpoint : 127.0.0.1:8000/api/user
Method: POST
HEADERS:
Authorization: Bearer {token}
Payload (Form data):
name: {name}
email: {email}
Return:</li>
</ol>
<pre><code>{
    "user": {
        "id": {id},
        "name": {updated name},
        "email": {updated email},
        "email_verified_at": {date},
        "is_user_admin": {boolean or null},
        "created_at": {date},
        "updated_at": {date}
    }
}
</code></pre>
<hr>
<h4>RSS channels</h4>
<ol>
<li>Get all channels
Endpoint : 127.0.0.1:8000/api/rss
Method: GET
HEADERS:
Authorization: Bearer {token}
Return:</li>
</ol>
<pre><code>{

}
</code></pre>