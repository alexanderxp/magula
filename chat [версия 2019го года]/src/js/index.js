import 'babel-polyfill';
import _ from 'lodash';

import './../sass/styles.scss';
//import 'font-awesome/sass/font-awesome.min.scss';
//import { threadId } from 'worker_threads';


/*
const getHeader = () => {
  const helloWebpack = _.join(['Hello', 'webpack!'], ' ');
  console.log(helloWebpack);
  const element = document.createElement('h1');

  element.innerHTML = helloWebpack;

  return element;
};

document.body.appendChild(getHeader());

const o = {
  foo: {
    bar: null
  }
};

console.log(o?.foo?.bar?.baz ?? 'default');
*/
void function () {
    var blurVal = 15, LOGIN = false, currentUserChatId = 0, messages = [], users = [], loggedUser = '';

    function toMMSS (seconds) {                     // функция счета секунд online
        var date = new Date(null);
        date.setSeconds(seconds);
        return date.toISOString().substr(14, 5);
    }

    document.addEventListener( "DOMContentLoaded", function() {
////////////////////////////////////// to delete!!! //////////////////////////////////////
/********/ //document.querySelector('body > div.login-modal').style.display = "none"; /****/ 
/********/ //blurVal = 0; /****************************************************************/
////////////////////////////////////// to delete!!! //////////////////////////////////////
        var timerElement = document.querySelector('.timeonline > .youstatus > .fa + span');              // селектор для функции подсчета секунд online
        document.querySelector('body > div.container.clearfix').style.filter = 'blur('+blurVal+'px)';
        
        // отображение времени ( часы и минуты ) в левом верхнем углу .
        document.querySelector('.timeonline > p > span').innerText = ((new Date).getHours() + ':' + (new Date).getMinutes());

        var requestUsers = new XMLHttpRequest();
        var requestMessages = new XMLHttpRequest();
        requestUsers.open('GET', 'https://studentschat.herokuapp.com/users', true);
        requestMessages.open('GET', 'https://studentschat.herokuapp.com/messages', true);

        requestUsers.onload = function() {
            if (requestUsers.status >= 200 && requestUsers.status < 400) {
            // Обработчик успещного ответа
                var response = requestUsers.responseText;
                users = JSON.parse(response);

                document.querySelector('.onlinemembers > span').innerText = getNumberOfActiveUsers();
                
                JSON.parse(response).forEach(                                              // изменение цвета online offline )
                    function (user, i) {
                        var ulDomElement = document.getElementById('users-list');
                        var liDomElement = document.createElement('li');
                        var status = '';
                        switch (user.status) {
                            case 'active':
                                status = 'online';
                                break;
                            case 'inactive':
                                status = 'offline';
                                break;
                        }
                        liDomElement.innerHTML = ' ' +
                        '<li class="clearfix" data-id="' + user.user_id + '">' +
                        // '<img src="images/0' + Number(i+1) + '.png" alt="avatar">' +
                            '<div class="about">' +
                            '<div class="name">' + user.username + '</div>' +
                            '<div class="status">' +
                                '<i class="fa fa-circle ' + status + '"></i>'+ status +''
                            '</div>' +
                            '</div>' +
                        '</li>';
                        ulDomElement.appendChild(liDomElement);
                });

                document.querySelectorAll('.list .clearfix').forEach(function (listElement) { // user-list click
                    var chatContainer = document.getElementById('chat-container');
                    listElement.addEventListener('click', function () {
                        currentUserChatId = this.getAttribute('data-id');
                        var currentMessagesList = getMessagesByUserId(currentUserChatId);
                        chatContainer.innerHTML = '';
                        currentMessagesList.forEach(userMessage => {
                            chatContainer.innerHTML += 
                            '<li>' +
                                '<div class="message-data">' +
                                    '<span class="message-data-name"><i class="fa fa-circle ' + this.firstChild.lastChild.firstChild.className.split(' ')[2] + '"></i>' + this.firstChild.firstChild.innerText + '</span>' +
                                    '<span class="message-data-time">' + datePicker(new Date(userMessage.datetime)) + '</span>' +
                                '</div>' +
                                '<div class="message my-message">' + userMessage.message + '</div>' +
                            '</li>';
                        });
                        document.getElementById('chat-container').scrollIntoView(false);
                        document.querySelector('.chat-num-messages > span').innerText = currentMessagesList.length;
                        document.querySelector('div.chat-with').innerText = this.firstChild.firstChild.innerText;
                    });
                });
            } else {
            // Обработчик ответа в случае ошибки
            }
        };
        requestUsers.onerror = function() {
            // Обработчик ответа в случае неудачного соеденения
        };
        requestUsers.send();

        requestMessages.onload = function() {
            if (requestMessages.status >= 200 && requestMessages.status < 400) {
            // Обработчик успешного ответа
            var response = requestMessages.responseText;
            
            JSON.parse(response).forEach(
                function (user, i) {
                    var divChatWithElement = document.getElementsByClassName('chat-with')[0];
                    divChatWithElement.innerText = user.chatroom_id;
                    document.querySelector('body > div.container.clearfix > div.chat > div.chat-history > ul > li:nth-child(1) > div.message.my-message').innerText = user.message;
                }
            );
            messages = JSON.parse(response);
            document.querySelector('.countMe').innerText = messages.length;   // селектор подсчета сообщений всех пользователей чата 
            } else {
            // Обработчик ответа в случае ошибки
            }
        };
        requestMessages.onerror = function() {
            // Обработчик ответа в случае неудачного соеденения
        };
        requestMessages.send();

        document.querySelector('body > div.login-modal > button').addEventListener('click', function () {
            var requestLogin = new XMLHttpRequest();
            requestLogin.open('POST', 'https://studentschat.herokuapp.com/users/register', true);

            loggedUser = document.querySelector('body > div.login-modal > div:nth-child(2) > input').value;   // селектор отсчета времени после залогивания

            requestLogin.onerror = function() {};

            requestLogin.onload = function() {
                //document.querySelector('body > div.container.clearfix').style.visibility = "visible";
                var i = blurVal;
                document.querySelector('body > div.login-modal').style.display = "none";
                var blurEffectInterval = setInterval(function () {
                    if (!i) {
                        clearInterval(blurEffectInterval);
                    }
                    document.querySelector('body > div.container.clearfix').style.filter = 'blur('+i--+'px)';                    
                }, 50);
                document.querySelector('.to-display').innerText = 'Logout';
                LOGIN = true;
                setInterval(function () {                                          // функция для подсчета секунд online
                    timerElement.innerText = +timerElement.innerText + 1;
                }, 1000);
            };
            requestLogin.setRequestHeader('Content-Type', 'application/json');

            requestLogin.send(JSON.stringify({
                username: loggedUser
            }));
        });

        document.getElementById('message-to-send').addEventListener('keydown', function (e) {
            var value = e.target.value;
            //  Ограничение сообщения до 500 символов.
            if (value.length >= 500) alert('Нельзя вводить больше 500 сообщений!!!');
            // подсчет символов, букв, пробелов.
            document.querySelector('#people-list > div.messageinfo > p:nth-child(1) > output').innerText =  value.length;
            document.querySelector('#people-list > div.messageinfo > p:nth-child(2) > output').innerText =  value.split(/[A-ZА-ЯЁa-zаЯЁ]/).length - 1;
            document.querySelector('#people-list > div.messageinfo > p:nth-child(3) > output').innerText =  value.split(' ').length - 1;
            document.querySelector('#people-list > div.messageinfo > p:nth-child(4) > output').innerText =  value.split(/[.,\/#!$%\^&\*;:{}=\-_`~()]/).length - 1;
        });

        document.querySelector('body > div.container.clearfix > div.chat > div.chat-history > ul > li:nth-child(1) > div.message.my-message').innerText = 'privet is cosmosa';

        document.getElementById('send-message').addEventListener('click', function () {
            if (!document.getElementById('message-to-send').value.trim()) {
                alert('Вы ввели пустое сообщение.');
                return;
            }
            var messageFragment = document.createElement('li');
            messageFragment.className = 'clearfix';
            messageFragment.innerHTML = 
            '<div class="message-data align-right">' +
                '<span class="message-data-time">' + datePicker(new Date) + '</span> &nbsp; &nbsp;' +
                '<span class="message-data-name">Вы</span> <i class="fa fa-circle me"></i>' +
            '</div>' +
            '<div class="message other-message float-right">' + document.getElementById('message-to-send').value + 
            '</div>';
            document.getElementById('chat-container').appendChild(messageFragment);
            
            var requestMessagePost = new XMLHttpRequest();
            requestMessagePost.open('POST', 'https://studentschat.herokuapp.com/messages', true);
            
            
            requestMessagePost.onload = function() {
                // Обработчик ответа в случае удачного соеденения
                console.log('Message post success!');
            };
            
            requestMessagePost.onerror = function() {
                // Обработчик ответа в случае неудачного соеденения
                //document.querySelector('body > div.container.clearfix').style.visibility = "visible";
                console.log('Что-то пошло не так');
            };
            requestMessagePost.setRequestHeader('Content-Type', 'application/json');
            
            requestMessagePost.send(JSON.stringify({
                datetime:(new Date()).toJSON(),
                message: document.getElementById('message-to-send').value,
                user_id: currentUserChatId
            }));
            
            document.getElementById('message-to-send').value = '';
        });
    });

    function getMessagesByUserId(userId) {
        return messages.filter(function (user) {
            return user.user_id === userId;
        });
    }

    function getNumberOfActiveUsers() {
        return users.filter(function (user) {
            return user.status === 'active';
        }).length;
    }

    function datePicker(date) {
        return date.getHours() + ':' + date.getMinutes() + ', ' + date.toLocaleDateString();
    }

    window.onload = addListeners();
    var offX;
    var offY;
    function addListeners() {
        document.querySelector('.login-modal').addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);
    }

    function mouseUp () {
    window.removeEventListener('mousemove', loginframeMove, true);
    }

    function mouseDown(e) {
        
        var loginDiv = document.querySelector('.login-modal');
        offX =  e.offsetX;
        offY =  e.offsetY;
        window.addEventListener('mousemove', loginframeMove, true);
    }

    function loginframeMove(e) {
        var loginDiv = document.querySelector('.login-modal');
        loginDiv.style.position = 'absolute';
        loginDiv.style.top = (e.clientY - offY) + 'px';
        loginDiv.style.left = (e.clientX - offX) + 'px';
    }

    var closeBtn = document.querySelector('.close-sign');

    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.login-modal').style.display =  'none';
    });

    document.querySelector('.to-display').addEventListener('click', function () {
        if (LOGIN) {
            this.innerText = 'Login';
            document.querySelector('body > div.container.clearfix').style.filter = 'blur('+blurVal+'px)';
            document.querySelector('div.login-modal').style.display = 'inline-block';
        }
    }); 


}();