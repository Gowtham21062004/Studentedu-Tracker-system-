import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../src/images/user-profile-icon-free-vector.jpg';
function App(){
  return (
    <>
    <div>
    <div class="container">
    <nav class="sidebar">
        <img src={images} />
        <ul class="nav-list">
            <li><i class="fa-solid fa-users"></i><br />
            <a href="#home">Student Management</a></li>
            <li><i class="fa-solid fa-inbox"></i><br />
            <a href="#about">Enrollment Management</a></li>
            <li><i class="fa-solid fa-gear"></i><br />
            <a href="#services">Quality control</a></li>
            <li><i class="fa-solid fa-file"></i><br />
            <a href="#contact">Assignment</a></li>
        </ul>
    </nav>

    </div>
    <h2>Student Managent System</h2>
    </div>
    <div className='main'>
        <div className="col1">
           <i class="fa-solid fa-user-tie"></i>
          <h3 style={{color:"white"}}>8</h3>
        </div>
        <div className="col2">
           <i class="fa-solid fa-user-tie"></i>
           <h3 style={{color:"white"}}>9</h3>
        </div>
        <div className="col3">
           <i class="fa-solid fa-user-tie"></i>
           <h3 style={{color:"white"}}>0</h3>
        </div>
       

    </div>
    <div className="menu">
        <p className='text-center'>Menu</p>
        <div className="row mt-5 text-center">
            <div className="col-4 ">
            <i class="fa-solid fa-user fs-1 text-primary text-center " />
            <p className=''>Register Enrollment</p>
            </div>
        <div className="col-4">
        <i class="fa-solid fa-book fs-1 text-primary text-center " />
        <p>Remedial Enrollment</p>
        </div>
        <div className="col-4">
        <i class="fa-solid fa-people-group fs-1 text-primary text-center" />
        <p>Club Management</p>
        </div>
        </div>
        <div className="row mt-5 text-center">
            <div className="col-4">
            <i class="fa-solid fa-book-open-reader fs-1 text-primary text-center " />
            <p className=''><span className='ms-2'>Classroom</span>
                <br></br> Management
            </p>
            </div>
        <div className="col-4">
        <i class="fa-solid fa-envelope fs-1 text-primary text-center " />
        <p className=''>SMS/EMAIL</p>
        </div>
        <div className="col-4">
        <i class="fa-solid fa-book fs-1 text-primary text-center" />
        <p className=''>Attendence</p>
        </div>
        </div>
        <div className="row mt-5 text-center">
            <div className="col-4"></div>
            <div className="col-4">
            <i class="fa-regular fa-hospital fs-1 text-primary text-center" />
            <p className=''> Clinic</p>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
   
    </>
  );
}

export default App;