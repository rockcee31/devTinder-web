import React from 'react'
import { useSelector } from 'react-redux';

const FeedCards = () => {
    const feed = useSelector((store) => store.feed) 
     console.log(feed)
    return (
        <div>
            <div className="carousel rounded-box w-md">
                {feed.length > 0 ? (
                    feed.map((e, index) => (
                        <div key={index} className="carousel-item w-full flex flex-col">
                          
                            <img 
                                src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid"
                                className="w-full h-1/2"
                                alt="Tailwind CSS Carousel component"
                            />
          
                            <div className=''>
                            <h1 className=" text-xl font-bold">Name : {e.name.toUpperCase()}</h1>
                            {e.age && e.gender && <h1  className=" text-xl font-bold">Age & Gender : {`${e.age} ${e.gender}`}</h1>}
                            <h1  className=" text-xl font-bold">Skills : {e.skills ? e.skills: "N/A"}</h1>
                            
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">No feed available</div>
                )}
            </div>
        </div>
    );
}

export default FeedCards;
