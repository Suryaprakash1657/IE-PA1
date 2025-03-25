// import React from "react";
// import { useState } from "react";

// function Addbook() {
//     const [title, setTitle] = useState("");
//     const [author, setauthor] = useState("");
//     const [description, setDescription] = useState("");
//     const [coverImage, setCoverImage] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({title,author,description,coverImage});
//     }
//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit}>

//             <label htmlFor="title">Title</label>
//             <input type="text" value={title} onChange={(e) => setTitle(e.target.value) } />
            
//             <label htmlFor="author">Author</label>
//             <input type="text" value={author} onChange={(e)=> setauthor(e.target.author) } />

//             <label htmlFor="description">Description</label>
//             <input type="textarea"  value={description} onChange={(e) => setDescription(e.target.description) } />

//             <label htmlFor="coverImage">CoverImage</label>
//             <input type="file" value={coverImage} onChange={(e) => setCoverImage(e.target.coverImage) } />

//             <button type="submit">Submit</button>
            
//         </form>
//     </div>
    
//   )
// }

// export default Addbook
import React, { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, author, description, url }); // Log form data
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;