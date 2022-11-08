<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Students List</h1>
    <!-- It won't show if there is no student data -->
    
</div>
     <table class="table table-bordered table-responsive-sm table-responsive-md table-responsive-lg">
        <thead>
        <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in studentlist" :key="student.key">
                <td>{{ student.firstName }}</td>
                <td>{{ student.lastName }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.mobileNumber }}</td>
                <td>
                   <router-link :to="{name: 'edit-student', params: { id: student.key }}" class="btn btn-primary">Edit
                    </router-link>
                    <button @click.prevent="deleteUser(student.key)" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>

</template>
<script>
import firebase from "../database";
const db = firebase.ref("students-list");

export default {
data() {
    return {
        studentlist: []
    }
},
created() {
    
    db.on("value", snapshot => {
       
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
           // console.log(snap.val().firstName)
            this.studentlist.push({
                key: snap.key,
                firstName: snap.val().firstName,
                lastName: snap.val().lastName,
                email: snap.val().email,
                mobileNumber: snap.val().mobileNumber
            });
            //console.log(this.studentlist);
        });
        
    });
},
methods: {
    
    deleteUser(id){
           
      if (window.confirm("Do you really want to delete?")) {
          
         db.child(id).remove().then(() => {
             
            alert("Student successfully deleted!");
          
            
           
        }).catch((error) => {
            console.log(error);
        });
      }
    }
}
}
</script>