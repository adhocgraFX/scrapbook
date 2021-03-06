/*  Web Starter Kit
     *  Copyright 2014 Google Inc. All rights reserved.
     *
     *  Licensed under the Apache License, Version 2.0 (the "License");
     *  you may not use this file except in compliance with the License.
     *  You may obtain a copy of the License at
     *
     *  https://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     *  distributed under the License is distributed on an "AS IS" BASIS,
     *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *  See the License for the specific language governing permissions and
     *  limitations under the License */

(function () {
    'use strict';

    var querySelector = document.querySelector.bind(document);

    var sidebarContainer = querySelector('.sidebar-container');
    var body = document.body;
    var appbarSelect = querySelector('.app-bar');
    var menuSidebarBtn = querySelector('.sidebar-menu');
    var main = querySelector('main');

    function closeMenu() {
        body.classList.remove('aside-open');
        appbarSelect.classList.remove('aside-open');
        sidebarContainer.classList.remove('aside-open');
    }

    function toggleMenu() {
        body.classList.toggle('aside-open');
        appbarSelect.classList.toggle('aside-open');
        sidebarContainer.classList.toggle('aside-open');
        sidebarContainer.classList.add('aside-opened');
    }

    main.addEventListener('click', closeMenu);
    menuSidebarBtn.addEventListener('click', toggleMenu);
    sidebarContainer.addEventListener('click', function (event) {
        if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
            closeMenu();
        }
    });
})();