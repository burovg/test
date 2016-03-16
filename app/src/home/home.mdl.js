import angular from 'angular';
import {Home} from './Home.ctrl';


export var home = angular.module('home',[])
    .controller(Home.name,Home);