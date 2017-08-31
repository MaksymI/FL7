import student from './student'
import addGroup from './addGroup'
import {outputToPage} from './output'

student.addToList(addGroup.addGroup('Ivan'));
student.addToList(addGroup.addGroup('Vasyl'));
student.addToList(addGroup.addGroup('Andriy'));

outputToPage(student.getList().join(','));