import angular from 'angular'
import {proxyFactory} from './proxy.srv';
import {usersComponentFactory} from './users/users.cmp';

export var users = angular.module('users',[])
    .directive('users',usersComponentFactory)
    .factory('usersProxy',proxyFactory);