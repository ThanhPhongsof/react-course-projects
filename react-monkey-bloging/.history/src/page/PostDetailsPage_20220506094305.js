import Layout from "components/layout/Layout";
import PostCategory from "module/post/PostCategory";
import PostImage from "module/post/PostImage";
import PostMeta from "module/post/PostMeta";
import React from "react";
import styled from "styled-components";

const PostDetailsPageStyles = styled.div``;

const PostDetailsPage = () => {
  return (
    <PostDetailsPageStyles>
      <Layout>
        <div className="container">
          <div className="post-header">
            <PostImage
              url="https://images.unsplash.com/photo-1649837867356-6c7ef7057f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              className="post-feature"
            ></PostImage>
            <div className="post-info">
              <PostCategory className="mb-6">Kiến thức</PostCategory>
              <h1 className="post-heading">
                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
              </h1>
              <PostMeta></PostMeta>
            </div>
          </div>
          <div className="post-content">
            <div className="entry-content">
              <h2>Chuong 2</h2>
              <p>
                Gastronomy atmosphere set aside. Slice butternut cooking home.
                Delicious romantic undisturbed raw platter will meld. Thick
                Skewers skillet natural, smoker soy sauce wait roux. slices Food
                qualities braise chicken cuts bowl through slices butternut
                snack. Tender meat juicy dinners. One-pot low heat plenty of
                time adobo fat raw soften fruit. sweet renders bone-in marrow
                richness kitchen, fricassee basted pork shoulder. Delicious
                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                fall-off-the-bone butternut chuck rice burgers. renders aromatic
                enjoyment, then slices taco. Minutes undisturbed cuisine lunch
                magnificent mustard curry. Juicy share baking sheet pork. Meals
                ramen rarities selection, raw pastries richness magnificent
                atmosphere. Sweet soften dinners, cover mustard infused skillet,
                Skewers on culinary experience.
              </p>

              <p>
                Juicy meatballs brisket slammin' baked shoulder. Juicy smoker
                soy sauce burgers brisket. polenta mustard hunk greens. Wine
                technique snack skewers chuck excess. Oil heat slowly. slices
                natural delicious, set aside magic tbsp skillet, bay leaves
                brown centerpiece. fruit soften edges frond slices onion snack
                pork steem on wines excess technique cup; Cover smoker soy sauce
                fruit snack. Sweet one-dozen scrape delicious, non sheet raw
                crunch mustard. Minutes clever slotted tongs scrape, brown steem
                undisturbed rice.
              </p>

              <p>
                Food qualities braise chicken cuts bowl through slices butternut
                snack. Tender meat juicy dinners. One-pot low heat plenty of
                time adobo fat raw soften fruit. sweet renders bone-in marrow
                richness kitchen, fricassee basted pork shoulder. Delicious
                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                fall-off-the-bone butternut chuck rice burgers.
              </p>
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  alt=""
                />
                <figcaption>
                  Gastronomy atmosphere set aside. Slice butternut cooking home.
                </figcaption>
              </figure>
              <h2>Chương 2</h2>
              <p>
                Gastronomy atmosphere set aside. Slice butternut cooking home.
                Delicious romantic undisturbed raw platter will meld. Thick
                Skewers skillet natural, smoker soy sauce wait roux. slices Food
                qualities braise chicken cuts bowl through slices butternut
                snack. Tender meat juicy dinners. One-pot low heat plenty of
                time adobo fat raw soften fruit. sweet renders bone-in marrow
                richness kitchen, fricassee basted pork shoulder. Delicious
                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                fall-off-the-bone butternut chuck rice burgers. renders aromatic
                enjoyment, then slices taco. Minutes undisturbed cuisine lunch
                magnificent mustard curry. Juicy share baking sheet pork. Meals
                ramen rarities selection, raw pastries richness magnificent
                atmosphere. Sweet soften dinners, cover mustard infused skillet,
                Skewers on culinary experience.
              </p>
            </div>
            <div className="author">
              <div className="author-image">
                <img
                  src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  alt=""
                />
              </div>
              <div className="author-content">
                <h3 className="author-name">Thanh Phong</h3>
                <p className="author-desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos non animi porro voluptates quibusdam optio nulla
                  quis nihil ipsa error delectus temporibus nesciunt, nam
                  officiis adipisci suscipit voluptate eum totam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </PostDetailsPageStyles>
  );
};

export default PostDetailsPage;
