import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TagList } from '../components/Tag';
import { PostList } from '../components/Post';
import api from "../misc/api";
import converter from "../misc/converter"
import TagSelector from '../components/TagSelector';
import activeTags from "../misc/activeTags"

class Main extends Component { //TODO: add suggested tags | infinite scroll | filters
  constructor(props) {
    super(props)

    this.state = {
      tags: [],
      suggestions: [],
      posts: [],
      searchTerm: "",
      pageNumber: 1
    }

    this.handleAddTag = this.handleAddTag.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleToggleTag = this.handleToggleTag.bind(this)
    this.handleLoadMore = this.handleLoadMore.bind(this)
  }

  componentDidMount() { //TODO: add back navigation handling
    window.onpopstate = this.handleBack.bind(this)
 
    this.refreshPage()
  }

  refreshPage() {
    this.getTagsFromUrl()

    if(this.state.tags.length > 0) {
      this.updatePosts()
    }
  }

  getTagsFromUrl() {
    if(this.props.location.search) {
      let tags = converter.queryAsTags(this.props.location.search) || []

      tags.forEach(t => activeTags.add(t.name))     
      this.setState({
        tags: tags
      })
    }
  }

  handleBack(event) {
    console.log("back")
    this.refreshPage()
  }
    
  handleAddTag(newTag) {
    let s = this.state

    if(!s.tags.some(e => e.name === newTag.name)) {
      s.tags.push(newTag)
      activeTags.add(newTag.name)
      this.setState(s)
    } else {
      let t = s.tags.find(e => e.name === newTag.name)
      t.modifier = newTag.modifier
    }
  }

  handleToggleTag(tag) {
    let s = this.state
    if(s.tags.some(e => e.name === tag.name)) {
      s.tags.splice(s.tags.indexOf(tag),1)
      activeTags.remove(tag.name)
    } else {
      s.tags.push(tag)
      activeTags.add(tag.name)
    }

    this.setState(s)
  }

  handleSearch(event) {
    this.updatePosts();
    event.preventDefault();
  }

  handleLoadMore(event) {
    this.addPosts()
    event.preventDefault();
  }

  updatePosts() {
    api.getPosts(this.state.tags)
      .then(result => {
        let s = this.state
        s.posts = result.map(p => {
          let pp = p
          pp.tags = p.tags.map(t => {
            return { name: t} 
          })
          return pp
        })
        s.pageNumber = 1
        this.props.history.push(this.props.location.pathname + "?" + converter.tagsAsQuery(this.state.tags));

        this.setState(s)
      })
  }

  addPosts(){
    let p = this.state.pageNumber + 1
    api.getPosts(this.state.tags, p)
      .then(result => {
        let s = this.state
        let newposts = result.map(p => {
          let pp = p
          pp.tags = p.tags.map(t => {
            return { 
              name: t
            } 
          })
          return pp
        })
        s.posts.push(...newposts)

        s.pageNumber = p

        this.setState(s)
      })
  }
    
  render() {
    return (
      <main>
        <section className="search">
          <h3 className="centered">Search</h3>
          <TagSelector onSubmit={this.handleAddTag} className="centered" />

          <label>Tags:</label>
          <TagList tags={this.state.tags} onClick={this.handleToggleTag} /> 

          <form onSubmit={this.handleSearch}>
            <input type="submit" value="Search" className="btn btn-block btn-red" />
          </form>
        </section>

        {this.state.posts.length > 0 ? 
          <section className="results">
            <h3 className="centered">Results</h3>
            <PostList posts={this.state.posts} onTagClick={this.handleToggleTag} />
            <form className="mt-3" onSubmit={this.handleLoadMore}>
              <input type="submit" value="Load more" className="btn btn-block btn-red" />
            </form>
          </section> : null
        }
      </main>
    )
  }
}

export default withRouter(Main)