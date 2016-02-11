/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
       // document.addEventListener("deviceready", getContactList, false); 
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'


    onDeviceReady: function() {
        function onSuccess(contacts) {
            var str = "";
            var birthday="";
            //var today = "";
            //display contacts with birthday information
for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].birthday){
        //today = new Date();
        birthday = new Date(contacts[i].birthday);
        birthday = new Date(birthday);
       /* if (birthday.getMonth() == today.getMonth()) {
        }*/
        if(contacts[i].birthday != null  || contacts[i].birthday != "")
                {
                    //Display your contacts
                }
        birthday = birthday.getDate() + "/" + (birthday.getMonth()+1) + "/" + birthday.getYear();
    }
    else{
       birthday = "";
            
    }
    //display formatted contact and birthday in list
    //Console.log(contacts);
 str += "<li class='list__item'>" + contacts[i].name.formatted+ "<span class='notification'>" + birthday+ "</span></li>";
}
document.getElementById("contact-list").innerHTML = str;

 };
 function onError(contactError) {
 alert('onError!');
 }; 
 //filter by name option
 var options = new ContactFindOptions();
 options.filter = "";
 options.multiple = true;
 options.hasPhoneNumber = true;
 options.hasBirthDay = true;
 filter = ["displayName", "birthday"];
navigator.contacts.find(filter, onSuccess, onError, options);

/*var ContactFindOptions = function(filter, multiple, desiredFields, hasPhoneNumber) {
    this.filter = filter || '';
    this.multiple = (typeof multiple != 'undefined' ? multiple : false);
    this.desiredFields = typeof desiredFields != 'undefined' ? desiredFields : [];
    this.hasPhoneNumber = typeof hasPhoneNumber != 'undefined' ? hasPhoneNumber : false;
};*/

      
    }
};
