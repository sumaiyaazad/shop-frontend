import axios from 'axios';
export default {
    getFlagSignIn: state => {
        return state.flagSignIn;
    },
    getUserId: state => {
        return state.userId;
    },
    getUserTerm: state => {
        return state.termId;
    },
    getUserDeptId: state => {
        return state.deptId;
    },
    getUserName: state => {
        return state.userName;
    },
    getToken: state => {
        return state.token;
    },
    getDept: state => {
        return state.dept;
    },
    getCurrentLevel: state => {
        return state.currentLevel;
    },
    getCurrentTerm: state => {
        return state.currentTerm;
    },
    getCurrentSession: state => {
        return state.currentSession;
    },
    getHallName: state => {
        return state.hallName;
    },
    getHallStatus: state => {
        return state.hallStatus;
    },
    getAdviserId: state => {
        return state.adviserId;
    },
    getAdviserName: state => {
        return state.adviserName;
    },
    getAdviserDesignation: state => {
        return state.adviserDesignation;
    },
    getAdviserDept: state => {
        return state.adviserDept;
    },
    getUserImage: state => {
        return 'https://firebasestorage.googleapis.com/v0/b/mt-biis.appspot.com/o/student%2F'+state.userId+'.jpg?alt=media';
        //return axios.defaults.baseURL + '/student/' + state.userId + '.jpg';
        //return 'http://localhost:1148/student/'+state.userId+'.jpg';
    },
    getAdviserImage: state => {
        return 'https://firebasestorage.googleapis.com/v0/b/mt-biis.appspot.com/o/adviser%2F'+state.adviserId+'.jpg?alt=media';
        //return axios.defaults.baseURL + '/adviser/' + state.adviserId + '.jpg';
        //return 'http://localhost:1148/adviser/'+state.adviserId+'.jpg';
    },
    getContacts: state => {
        return {
            'Name': state.userName,
            'Student Id': state.userId,
            'Level/Term': state.currentLevel + '/' + state.currentTerm,
        };
    },
    getEdits: state => {
        return {
            'Phone No': state.phone,
            'Email': state.email,
            'Contact Person Name': state.contact_person_name,
            'Contact Person Phone': state.contact_person_number,
            'Residential Area': state.address
        };
    },
    getCourses: state => {
        return state.courses;
    },
    getTotalCreditHours: state => {
        return state.total_credit_hours;
    },
    getRegisteredCreditHours: state => {
        return state.registered_credit_hours;
    },
    getCreditHoursEarnedUptoThisTerm: state => {
        return state.credit_hours_upto_this_term;
    },
    getGradeTermList: state => {
        return state.gradeTermList;
    },
    getShowFlag: state => {
        return state.showFlag;
    },
    getEarnedCreditHoursThisTerm: state => {
        return state.earned_credit_hours_this_term;
    },
    getGPA:state=>{
        return state.gpa;
    },
    getCGPA:state=>{
        return state.cgpa;
    }
}