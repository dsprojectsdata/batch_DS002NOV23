import BlogCategoryBtn from "./BlogCategoryBtn";

const BlogBox = ({categoryName, image, foodDetail}) => {

    // console.log("foodDetail >>", foodDetail);

    return (
        <div class="card">
            <div class="card-banner">
                <BlogCategoryBtn name={categoryName} />
                <img class="banner-img" src={image} alt='' />
            </div>
            <div class="card-body">
                <p class="blog-hashtag">#Food #Pizza</p>
                <h2 class="blog-title">What is the tastiest pizza in Pizza Hut?</h2>
                <p class="blog-description">My thoughts on the future of front end web development</p>

                <div class="card-profile">
                    <img class="profile-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYJQKSoM7S75P_KMRtQHqAAIPh133CSxByw&usqp=CAU' alt='' />
                    <div class="card-profile-info">
                        <h3 class="profile-name">Eleanor Pea</h3>
                        <p class="profile-followers">5.2k followers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogBox;

// Prop drilling