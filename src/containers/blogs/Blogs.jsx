import React, {useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import {Row, Col, Container} from "reactstrap"
// import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  // const {isDark} = false;
  if (!blogSection.display) {
    return null;
  }
  return (
    <div  id="publications" style={{paddingTop: 25}}>
            <Container >
            <div className="d-flex px-3" style={{paddingBottom: "20px"}}>
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-books text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                    <h4 className="display-3" style={{color: "#11CDEF"}}>Publications</h4>
                    </div>
              </div>
        <Fade bottom duration={1000} distance="20px">

              <Row style={{justifyContent: "center", margin: "center"}}>
                <div className="main" id="blogs">
                  <div className="blog-header">
                  </div>
                  <div className="blog-main-div">
                    <div className="blog-text-div">
                      {blogSection.blogs.map((blog, i) => {
                        return (
                          <BlogCard
                            key={i}
                            // isDark={isDark}
                            blog={{
                              url: blog.url,
                              image: blog.image,
                              title: blog.title,
                              description: blog.description,
                              conference: blog.conference,
                              submission: blog.submission,
                              finished: blog.url != null
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Row>
              
            </Fade>
      </Container>
    </div>
    
    
  );
}
