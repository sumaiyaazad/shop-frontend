import router from "@/router";
import axios from 'axios';
import firebase from 'firebase';

export default {
    async adminStudent(context) {
        console.log("adminStudent clicked");
        context.rootState.spinnerFlag = true;
        try {
            let response2 = await axios.get('/admin/engDepts');
            let response3 = await axios.get('/admin/terms');
            if (response2.data.length != 0) {
                context.commit('setDeptEngList', response2.data);
                //console.log(this.deptEngList);
            }
            if (response3.data.length != 0) {
                context.commit('setTermList', response3.data);
                //console.log(this.termList);
            }
        } catch (e) {
            console.log("adminStudent catch error: ", e);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async adminTeacher(context) {
        console.log("adminStudent clicked");
        context.rootState.spinnerFlag = true;
        try {
            let response = await axios.get('/admin/depts');
            //console.log(response.data);
            if (response.data.length != 0) {
                context.commit('setDeptList', response.data);
                console.log('adminTeacher deptList from store: ', context.getters.getDeptList);
            }
        } catch (e) {
            console.log("adminTeacher catch error: ", e);
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async adminDeleteStudent(context, payload) {
        console.log("adminDeleteStudent clicked");
        for (let item in payload) {
            if (payload[item] === '') {
                context.rootState.messageType = "error";
                context.rootState.message = "Empty Field.";
                return
            }
        }
        context.rootState.spinnerFlag = true;
        try {
            let response = await axios.delete('/admin/student', {data: payload});
            if (response.status === 200) {
                console.log("adminUpdateGrade response: ", response);
                await context.dispatch('deleteImage',{url:"student/"+payload.id+".jpg"});
                context.rootState.messageType = "success";
                context.rootState.message = response.data.message;
                return "clear";
            }
        } catch (e) {
            console.log("adminDeleteStudent catch error: ", e);
            context.rootState.messageType = "error";
            context.rootState.message = e.response.data.message;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async adminDeleteTeacher(context, payload) {
        console.log("adminDeleteTeacher clicked");
        for (let item in payload) {
            if (payload[item] === '') {
                context.rootState.messageType = "error";
                context.rootState.message = "Empty Field.";
                return
            }
        }
        context.rootState.spinnerFlag = true;
        try {
            let response = await axios.delete('/admin/teacher', {data: payload});
            if (response.status === 200) {
                console.log("adminUpdateGrade response: ", response);
                await context.dispatch('deleteImage',{url:"adviser/"+payload.id+".jpg"});
                context.rootState.messageType = "success";
                context.rootState.message = response.data.message;
                return "clear";
            }
        } catch (e) {
            console.log("adminDeleteTeacher catch error: ", e);
            context.rootState.messageType = "error";
            context.rootState.message = e.response.data.message;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async adminInsertStudent(context, payload) {
        console.log("adminStudent clicked");
        console.log('payload in adminInsertStudent: ', payload);
        let formData = new FormData();
        for (let item in payload) {
            if (payload[item] === '' || payload[item] === null) {
                context.rootState.messageType = "error";
                context.rootState.message = "Empty Field.";
                console.log("returning");
                return
            }
            if(item==='image' && !payload[item].name.toLowerCase().includes('.jpg') && !payload[item].name.toLowerCase().includes('.jpeg') && !payload[item].name.toLowerCase().includes('.png')){
                context.rootState.messageType = "error";
                context.rootState.message = "Image error.";
                return
            }
            if (item !== 'image') {
                formData.append(item, payload[item]);
            }
        }
        context.rootState.spinnerFlag = true;
        console.log('formData in adminInsertStudent: ', formData);
        try {
            let response = await axios.post('/admin/student', formData);
            if (response.status === 200) {
                console.log("adminInsertStudent response: ", response);
                await context.dispatch('uploadImage',{url:"student/"+payload.id+".jpg",file:payload.image});
                context.rootState.messageType = "success";
                context.rootState.message = response.data.message;
                return "clear";
            }
        } catch (e) {
            console.log("adminInsertStudent catch error: ", e);
            context.rootState.messageType = "error";
            context.rootState.message = e.response.data.message;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async adminInsertTeacher(context, payload) {
        console.log("adminTeacher clicked");
        console.log('payload in adminInsertTeacher: ', payload);
        let formData = new FormData();
        for (let item in payload) {
            if (payload[item] === '' || payload[item] === null) {
                context.rootState.messageType = "error";
                context.rootState.message = "Empty Field.";
                return
            }
            if(item==='image' && !payload[item].name.toLowerCase().includes('.jpg') && !payload[item].name.toLowerCase().includes('.jpeg') && !payload[item].name.toLowerCase().includes('.png')){
                context.rootState.messageType = "error";
                context.rootState.message = "Image error.";
                return
            }
            if (item !== 'image') {
                formData.append(item, payload[item]);
            }
        }
        context.rootState.spinnerFlag = true;
        console.log('formData in adminInsertTeacher: ', formData);
        // console.log(formData.get('id'));
        // console.log(formData.get('name'));
        // console.log(formData.get('dept'));
        // console.log(formData.get('designation'));
        try {
            let response = await axios.post('/admin/teacher', formData);
            if (response.status === 200) {
                console.log("adminInsertTeacher response: ", response);
                await context.dispatch('uploadImage',{url:"adviser/"+payload.id+".jpg",file:payload.image});
                context.rootState.messageType = "success";
                context.rootState.message = response.data.message;
                return "clear";
            }
        } catch (e) {
            console.log("adminInsertTeacher catch error: ", e);
            context.rootState.messageType = "error";
            context.rootState.message = e.response.data.message;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async adminUpdateDesignation(context, payload) {
        console.log("adminUpdateDesignation clicked");
        console.log('payload in adminUpdateDesignation: ', payload);
        for (let item in payload) {
            if (payload[item] === '') {
                context.rootState.messageType = "error";
                context.rootState.message = "Empty Field.";
                return
            }
        }
        context.rootState.spinnerFlag = true;
        try {
            let response = await axios.patch('/admin/updateDesignation', payload);
            if (response.status === 200) {
                console.log("adminUpdateDesignation response: ", response);
                context.rootState.messageType = "success";
                context.rootState.message = response.data.message;
                return "clear";
            }
        } catch (e) {
            console.log("adminUpdateDesignation catch error: ", e);
            context.rootState.messageType = "error";
            context.rootState.message = e.response.data.message;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async adminUpdateGrade(context, payload) {
        console.log("adminUpdateGrade clicked");
        console.log('payload in adminUpdateGrade: ', payload);
        for (let item in payload) {
            if (payload[item] === '') {
                context.rootState.messageType = "error";
                context.rootState.message = "Empty Field.";
                return
            }
        }
        context.rootState.spinnerFlag = true;
        try {
            let response = await axios.patch('/admin/updateGrade', payload);
            if (response.status === 200) {
                console.log("adminUpdateGrade response: ", response);
                context.rootState.messageType = "success";
                context.rootState.message = response.data.message;
                return "clear";
            }
        } catch (e) {
            console.log("adminUpdateGrade catch error: ", e);
            context.rootState.messageType = "error";
            context.rootState.message = e.response.data.message;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async publish(context) {
        console.log("public clicked");
        context.rootState.spinnerFlag = true;
        try {
            let response = await axios.patch('/admin/updatePublish');
            console.log("publish response: ", response);
            context.rootState.messageType = "success";
            context.rootState.message = response.data.message;
            return 'clear';
        } catch (e) {
            console.log("adminUpdateGrade catch error: ", e);
            context.rootState.messageType = "error";
            context.rootState.message = e.response.data.message;
        } finally {
            context.rootState.spinnerFlag = false;
        }
    },
    async uploadImage(context,payload) {
        console.log("upload image");
        console.log("payload url: ",payload.url);
        let storage = firebase.storage().ref(payload.url);
        console.log("storage created");
        let upload = storage.put(payload.file);
        console.log("before upload on");
        upload.on(
            "state_changed",
            (snapshot) => {},
            () => {
                context.rootState.messageType = "error";
                context.rootState.message = "Image upload error.";
                console.log("could not upload image")
            },
            () => {
                console.log("image uploaded");
            }
        );
    },
    async deleteImage(context,payload) {
        let storageRef = firebase.storage().ref();
        let desertRef = storageRef.child(payload.url);
        desertRef.delete().then(() => {
            console.log("Image deletion successful");
        }).catch((error) => {
            console.log(error);
        });
    },
}