import { useState, useRef , useEffect } from "react";
import hookStyle from "./components/Hooks.module.css"
import { db } from  "../FirebaseInit";
import { collection, doc, setDoc, onSnapshot, deleteDoc } from "firebase/firestore"; 


// function blogsReducer(state, action){
//     switch(action.type){
//         case "ADD":
//             return[action.blog, ...state]

//         case "REMOVE":
//             return state.filter((blog, index)=>index !== action.index);

//         default:
//             return[];


//     }
    
// }

export default function Input(){
    const combineClassName = `${hookStyle.input} ${hookStyle.inputcontent}`
    // const[title, setTitle] = useState("");
    // const[content, setContent] = useState("");
    const [formData, setFormData] = useState({title:"", content:""});
    const[blogs, setBlogs] = useState([]);
    // const [blogs, dispatch] = useReducer(blogsReducer, []);
    const titleRef = useRef(null);

    useEffect(()=>{
        titleRef.current.focus();
        }, []);

        useEffect(()=>{
            if(blogs.length){
                document.title = blogs[0].title
            }else{
                document.title = "No Blogs !!"
            }
        },[blogs]);

        useEffect(()=>{
            // async function fetchData(){
            //     const snapShot = await getDocs(collection(db, "blogs"));
                
            // // doc.data() is never undefined for query doc snapshots
            // // console.log(doc.id, " => ", doc.data());
            //     const blogs = snapShot.docs.map((doc)=>{
            //         return{
            //             id: doc.id,
            //             ...doc.data()

            //      }
            //     })

            //     console.log(blogs);
            //     setBlogs(blogs);
            // };
            

            // fetchData();

             onSnapshot(collection(db, "blogs"), (snapShot) =>{
                const blogs = snapShot.docs.map((doc)=>{
                return{
                        id: doc.id,
                        ...doc.data()
        
                      }

                    })
                        
                    console.log(blogs);
                    setBlogs(blogs);
            })
        
            
        }, []);

async function handleSubmit(e){
    e.preventDefault();

    setBlogs([{title: formData.title, content: formData.content}, ...blogs]);
// dispatch({type: "ADD", blog:{title: formData.title, content: formData.content}});


// Add a new document with a generated id.
const docRef = doc(collection(db, "blogs"))
await setDoc(docRef, {
  title: formData.title,
  content: formData.content,
  createdAt: new Date()
});

// console.log("Document written with ID: ", docRef.id);

    setFormData({title:"", content:""});
    titleRef.current.focus();

    console.log(blogs);
}

async function removeBlog(i) {
   
    const docRef = doc(db, "blogs", i)

    await deleteDoc(docRef);
    // setBlogs(blogs);
    // setBlogs(blogs.filter((blog,index) => index !== i));
    // dispatch({type:"REMOVE", index: i});

}

    return(
        <>
        
        <div className={hookStyle.section}>
        <h2>Welcome to Blog</h2>
        <form onSubmit={handleSubmit}>
            <Row label = "Name">

             <input className={hookStyle.input} placeholder="Enter the Title Here" value={formData.title} onChange={(e)=>setFormData({title: e.target.value, content:formData.content})} 
             ref={titleRef} required />

        </Row>
        <Row label = "Last Name">

             <textarea className={combineClassName} placeholder="Enter the Content Here" value={formData.content} onChange={(e)=>setFormData({title:formData.title,content:e.target.value})} />
        
        </Row>

        <button className={hookStyle.btn}>ADD</button>
        </form>
        </div>
        <hr />
        <h1>Blogs:</h1>
       {blogs.map((blog, i)=>(
        <div className={hookStyle.div}key={i} >
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
           <div className={hookStyle.dltbtn}>
            <button onClick={()=>removeBlog(blog.id)}>DELETE</button>
            </div> 
        </div>
       ))}
        
        </>
    );
    }

function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br /></label>
        {props.children}
        <hr/> 
        </>
    )
}