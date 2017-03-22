/**
 * Created by My on 2017-03-22.
 */
define(['app'], function (app) {
    'use strict';
    app.factory('socket', function () {
        var websocket = null;
        console.log("factory instance");
        //判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {
            websocket = new WebSocket("ws://192.168.6.52:8080/websocket");
        }
        else {
            alert('Not support websocket')
        }
        //连接发生错误的回调方法
        websocket.onerror = function () {
            setMessageInnerHTML("error");
        };

        //连接成功建立的回调方法
        websocket.onopen = function (event) {
            setMessageInnerHTML("open");
        }

        //接收到消息的回调方法
        websocket.onmessage = function (event) {
            setMessageInnerHTML(event.data);
        }

        //连接关闭的回调方法
        websocket.onclose = function () {
            setMessageInnerHTML("close");
        }

        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function () {
            websocket.close();
        }
        var message = '';
        //将消息显示在网页上
        function setMessageInnerHTML(innerHTML) {
            message = innerHTML;
            console.log(message);
        }

        return message;

    });
});