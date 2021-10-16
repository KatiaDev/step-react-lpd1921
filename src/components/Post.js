import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const SinglePost = (props) => {
  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    if (props.postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${props.postId}`)
        .then((response) => response.json())
        .then((json) => {
          console.log("post number: ", json);
          setSinglePost(json);
        });
    }
  }, [props.postId]);

  return (
    <Box>
      {singlePost ? (
        <Box
          my={10}
          p={5}
          bg="gray.200"
          borderWidth="5px"
          borderRadius="lg"
          borderColor="twitter.300"
        >
          <Text>
            <strong>postId: </strong> {singlePost.id}
          </Text>
          <Text>
            <strong>Title: </strong> {singlePost.title}
          </Text>
          <Text>
            <strong>Body: </strong>
            {singlePost.body}
          </Text>
          <Text>
            <strong>userId: </strong>
            {singlePost.userId}
          </Text>

          <Button
            colorScheme="twitter"
            size="sm"
            m={3}
            onClick={() => props.setPostId("")}
          >
            Go Back
          </Button>
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
    </Box>
  );
};

export default SinglePost;
