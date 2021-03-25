import router from "@/router";
import axios from 'axios';

export default {
    async adviser(context) {
        console.log("adviser clicked");
        if(context.getters.getAdviserName!=="" && context.getters.getAdviserDept!=="" && context.getters.getAdviserDesignation!=""){
            return
        }
        context.rootState.spinnerFlag = true;
        let sendObject = {
            id: context.getters.getAdviserId,
            token: context.getters.getToken
        };
        console.log("adviser sendObject: ", sendObject);
        try {
            let response = await axios.get('/adviserInfo', {params: sendObject});
            console.log("adviser response: ");
            console.log(response.data[0]);
            if (response.data[0].length != 0) {
                let payload = {
                    name: response.data[0].ins_name,
                    designation: response.data[0].designation,
                    dept: response.data[0].dept
                }
                context.commit('setAdviserInfo', payload);
            } else {
                console.log('adviser: response.data[0].length=0');
            }
        } catch (e) {
            console.log("adviser catch error: ", e);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async app(context){
        context.rootState.spinnerFlag = true;
        console.log("token detected in app: ",localStorage.getItem('token'));
        context.commit('setToken',localStorage.getItem('token'));
        let sendObject={
            token: context.getters.getToken
        }
        console.log('app sendObject ',sendObject);
        try {
             let response = await axios.get('/signIn',{params:sendObject});
             console.log("app response: ",response);
            if (response.data[0].length != 0) {
                let payload = {
                    id: response.data[0].student_id,
                    token:context.getters.getToken,
                    term_id: response.data[0].term_id,
                    dept_id: response.data[0].dept_id,
                    name: response.data[0].student_name,
                    level: response.data[0].lvl,
                    term: response.data[0].trm,
                    session: response.data[0].sssn,
                    hallName: response.data[0].hall_name,
                    hallStatus: response.data[0].hall_status,
                    dept: response.data[0].dept_name,
                    adviserId: response.data[0].ins_id
                };
                context.commit('setUser', payload);
                return true;
            }
        }catch (e){
            console.log("app catch error: ",e.response.data);
        }finally{
            context.rootState.spinnerFlag = false;
        }
    },
    async contact(context) {
        console.log("contact clicked");
        if(context.state.phone!=="" && context.state.email!=="" && context.state.contact_person_name!=="" && context.state.contact_person_number!=="" && context.state.address!=""){
            return
        }
        context.rootState.spinnerFlag = true;
        let sendObject = {
            token: context.getters.getToken
        };
        console.log("contact sendObject: ", sendObject);
        try {
            let response = await axios.get('/contactInfo', {params: sendObject});
            console.log("contact response: ", response.data[0]);

            if (response.data[0].length != 0) {
                let payload = {
                    phone: response.data[0].mobile_number,
                    email: response.data[0].email,
                    contact_person_name: response.data[0].contact_person_name,
                    contact_person_number: response.data[0].contact_person_number,
                    address: response.data[0].address
                };
                context.commit('unsetUserInfo');
                context.commit('setUserInfo', payload);
                //console.log('userinfo in contact phone number: ',context.getters.getPhone);
            } else {
                console.log('contact: response.data[0].length=0');
            }
        } catch (e) {
            console.log("contact catch error: ", e);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async editConfirmClicked(context, payload) {
        console.log("editConfirm clicked");
        if(context.state.phone!=="" && context.state.email!=="" && context.state.contact_person_name!=="" && context.state.contact_person_number!=="" && context.state.address!=""){
            return
        }
        context.rootState.spinnerFlag = true;
        console.log("payload from editInfo: ", payload);
        let sendObject = {
            token: context.getters.getToken,
            phone: payload['Phone No'],
            email: payload['Email'],
            contact_person_name: payload['Contact Person Name'],
            contact_person_number: payload['Contact Person Phone'],
            address: payload['Residential Area']
        };
        console.log('editConfirm sendObject: ', sendObject);
        try {
            let response = await axios.patch('/editInfo', sendObject);
            console.log("editConfirm response: ");
            console.log(response);
            context.rootState.messageType="success";
            context.rootState.message=response.data.message;
            return response.status;
        } catch (e) {
            console.log("editConfirm catch error: ", e.response.data);
            context.rootState.messageType="error";
            context.rootState.message=e.response.data.message;
            return e.response.status;
        } finally {
            await context.dispatch('gotoContact');
            context.rootState.spinnerFlag = false;
        }
    },
    async logInClicked(context, payload) {
        console.log("signIn clicked");
        context.rootState.spinnerFlag = true;
        console.log("payload from signIn: ",payload);
        try {
            let response = await axios.post('/signIn', payload);
            console.log("signIn response data: ");
            console.log(response.data);
            console.log("response data token: ", response.data.token);
            if (response.data[0].length != 0) {
                let payload1 = {
                    id: response.data[0].student_id,
                    token: response.data.token,
                    term_id: response.data[0].term_id,
                    dept_id: response.data[0].dept_id,
                    name: response.data[0].student_name,
                    level: response.data[0].lvl,
                    term: response.data[0].trm,
                    session: response.data[0].sssn,
                    hallName: response.data[0].hall_name,
                    hallStatus: response.data[0].hall_status,
                    dept: response.data[0].dept_name,
                    adviserId: response.data[0].ins_id
                };
                console.log("after signIn payload: ",payload1);
                context.commit('setUser', payload1);
                localStorage.setItem("token", context.getters.getToken);
                await context.dispatch('gotoHome');
                context.rootState.messageType="success";
                context.rootState.message=response.data.message;
                return response.status;
            } else {
                console.log('signIn else block');
            }
        } catch (e) {
            console.log("signIn catch error response data: ",e.response.data);
            context.rootState.messageType="error";
            context.rootState.message=e.response.data.message;
            return e.response.status;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async logOutClicked(context) {
        console.log("logOut clicked");
        context.rootState.spinnerFlag = true;
        let sendObject = {
            token: localStorage.getItem('token')
        }
        console.log("logOut sendObject: ", sendObject);
        context.commit('unsetUser');
        context.commit('unsetUserInfo');
        context.commit('unsetAdviserInfo');
        localStorage.removeItem("token");
        await router.push('/signIn');
        let response = await axios.post('/logOut', sendObject);
        console.log("logOut response: ", response);
        context.rootState.spinnerFlag = false;
    },
    async passwordChange(context, payload) {
        console.log("passwordChange clicked");
        context.commit('setSpinnerFlag');

        let sendObject = {
            ...payload,
            token: context.getters.getToken,
        };
        console.log("passwordChange sendObject: ", sendObject);
        try {
            let response = await axios.patch('/password', sendObject);
            console.log("passwordChange response: ");
            console.log(response.data);
            await context.dispatch('gotoHome');
            context.rootState.messageType="success";
            context.rootState.message=response.data.message;
            return response.status;
        } catch (e) {
            console.log("passwordChange catch error: ", e.response.data);
            context.rootState.messageType="error";
            context.rootState.message=e.response.data.message;
            return e.response.status;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async registration(context) {
        console.log("registration clicked");
        if(context.getters.getCourses.length!==0){
            return
        }
        context.rootState.spinnerFlag = true;
        let sendObject = {
            token: context.getters.getToken,
            term_id: context.getters.getUserTerm,
            available_dept: context.getters.getUserDeptId
        };
        console.log('registration sendObject: ', sendObject);
        try {
            let response = await axios.get('/registration', {params: sendObject});
            console.log("registration response: ", response.data);
            if (response.data.registration && response.data.length !== 0) {
                context.commit('setTotalCreditHours', {total_credit_hours: response.data.total_credit_hour});
                console.log("registration total_credit_hours from store: ", context.getters.getTotalCreditHours);
                let courses=[];
                for(let i in response.data){
                    if(typeof response.data[i] === 'object'){
                        response.data[i].select=false;
                        courses.push(response.data[i]);
                    }
                }
                console.log(response.data);
                context.commit('setCourses', courses);
                console.log("registration courses from store: ", context.getters.getCourses);
            } else if (!response.data.registration) {
                console.log("registration redirect to registrationApproval");
                await context.dispatch('gotoRegistrationApproval');
            } else {
                console.log('registration else block');
            }
        } catch (e) {
            console.log("registration catch error: ", e);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async registrationApproval(context) {
        console.log("registrationApproval clicked");
        if(context.getters.getCourses.length!==0){
            return
        }
        context.rootState.spinnerFlag = true;
        let sendObject = {
            token: context.getters.getToken,
            term_id: context.getters.getUserTerm
        };
        console.log("registrationApproval sendObject: ", sendObject);
        try {
            let response = await axios.get('/registrationApproval', {params: sendObject});
            console.log("registrationApproval respons data: ", response.data);
            console.log("registrationApproval response.data.registered_credit_hours: ", response.data.registered_credit_hours);
            console.log("registrationApproval response.data.credit_hours_earned: ", response.data.credit_hours_earned);
            context.commit('setRegisteredCreditHours', {registered_credit_hours: response.data.registered_credit_hours});
            context.commit('setCreditHoursEarnedUptoThisTerm', {credit_hours_earned_upto_this_term: response.data.credit_hours_earned});
            if (response.data.registered_credit_hours === null) {
                context.commit('setRegisteredCreditHours', {registered_credit_hours: 0});
            }
            if (response.data.credit_hours_earned === null) {
                context.commit('setCreditHoursEarnedUptoThisTerm', {credit_hours_earned_upto_this_term: 0})
            }
            if (response.data.length !== 0) {
                let courses=[];
                for(let i in response.data){
                    if(typeof response.data[i] === 'object' && response.data[i]!==null){
                        courses.push(response.data[i]);
                    }
                }
                console.log("registrationApproval courses: ",courses);
                context.commit('setCourses',courses);
                console.log("registration courses from store: ", context.getters.getCourses);
            } else {
                console.log('registrationApproval else block');
            }
            console.log("registrationApproval registered_credit_hours from store: ", context.getters.getRegisteredCreditHours);
            console.log("registrationApproval credit_hours_earned_upto_this_term from store: ", context.getters.getCreditHoursEarnedUptoThisTerm);
        } catch (e) {
            console.log("registrationApproval catch error: ", e);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async registrationSubmitClicked(context, payload) {
        console.log("registrationSubmit clicked ");
        context.commit('setCourses',[]);
        context.rootState.spinnerFlag = true;
        console.log("payload from registration: ", payload);
        let sendObject = {
            token: context.getters.getToken,
            term_id: context.getters.getUserTerm,
            course_id: [...payload]
        };
        console.log("registrationSubmitClicked sendObject", sendObject);

        try {
            let response = await axios.post('/insertRegistration', sendObject);
            console.log("insertRegistration response: ", response);
            await context.dispatch('gotoRegistrationApproval');
            context.rootState.messageType="success";
            context.rootState.message=response.data.message;
            return response.status;
        } catch (e) {
            console.log("registrationSubmitClicked catch error: ", e.response.data);
            context.rootState.messageType="error";
            context.rootState.message=e.response.data.message;
            return e.response.status;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async showGrade(context, payload) {
        console.log("showGrade clicked");
        context.rootState.spinnerFlag = true;
        console.log("payload from viewGrade: ", payload);
        let sendObject = {
            ...payload,
            token: context.getters.getToken
        }
        console.log("showGrade sendObject: ", sendObject);
        try {
            let response = await axios.get('/showGrade', {params: sendObject});
            console.log("showGrade response data: ", response.data);
            context.commit('setRegisteredCreditHours', {registered_credit_hours: response.data.registered_credit_hours});
            context.commit('setEarnedCreditHoursThisTerm', {earned_credit_hours_this_term: response.data.earned_credit_hours});
            context.commit('setTotalCreditHours', {total_credit_hours: response.data.total_credit_hours});
            console.log('showGrade gpa from response data: ',response.data.gpa);
            console.log('showGrade cgpa from response data: ',response.data.cgpa);
            context.commit('setGPA',{gpa: response.data.gpa});
            context.commit('setCGPA', {cgpa:response.data.cgpa});
            console.log('showGrade gpa from store: ',context.getters.getGPA);
            console.log('showGrade cgpa from store: ',context.getters.getCGPA);
            if (response.data.length != 0) {
                let courses = [];
                console.log('response data row length is not zero');
                for(let i in response.data){
                    if(typeof response.data[i] === 'object'){
                        courses.push(response.data[i])
                    }
                }
                console.log("showGrade courses: ",courses);
                context.commit('setCourses', courses);
                console.log(context.getters.getCourses);
            } else {
                console.log('showGrade else block');
            }
        } catch (e) {
            console.log("showGrade catch error: ", e);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async viewGrade(context) {

        console.log("viewGrade clicked");
        context.rootState.spinnerFlag = true;
        let sendObject = {
            token: context.getters.getToken
        };
        console.log("viewGrade sendObject: ", sendObject);
        try {
            let response = await axios.get('/viewGrade', {params: sendObject});
            console.log("viewGrade response data: ", response.data);

            if (response.data.length != 0) {
                let terms = [];
                for(let i in response.data){
                    if(i!=='message'){
                        terms.push('20' + response.data[i].slice(0, 3) + '20' + response.data[i].slice(3,))
                    }
                }
                console.log('viewGrade terms: ', terms);
                context.commit('setGradeTermList', terms);
            } else {
                context.commit('setShowFlag', {showFlag: false});
            }
        } catch (e) {
            console.log("viewGrade catch error: ", e);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    gotoContact() {
        router.push('/contact');
    },
    gotoEditInfo() {
        router.push('/editInfo');
    },
    gotoHome() {
        router.push('/home');
    },
    gotoRegistrationApproval() {
        router.push('/registrationApproval');
    },
    gotoShowGrade(_, payload) {
        router.push({name: 'ShowGrade', params: payload});
    },
    gotoViewGrade() {
        router.push('/viewGrade');
    }
}