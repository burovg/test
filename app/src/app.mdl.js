import angular from 'angular';
import {home} from './home/home.mdl';
import {users} from './users/users.mdl'


var app = angular.module('app',[home.name,users.name]);
