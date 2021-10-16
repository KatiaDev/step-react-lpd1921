import { useEffect, useState } from "react";
import Time from "./components/Time";
import Post from "./components/Post";
import { Button, Container, Box, Heading, Text } from "@chakra-ui/react";

function App() {
  //EXEMPLE DE COD ASYNC:
  //cereri catre serverul DB -> HTTP requests
  //pastrarea datelor in LocalStorage-obiect global care este accesat din browser
  //setTimeout(), setInterval()

  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState("");

  //useEffect(()=>{callback function}, [dependencies])

  //console.log("Hello 1");

  useEffect(() => {
    console.log("Hello 2");
  }, []);

  //console.log("Hello 3");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container>
      <Time />
      <Heading as="h1" textAlign="center">
        Posts
      </Heading>
      {postId ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        posts.map((post) => (
          <Box
            key={post.id}
            my={10}
            p={5}
            bg="gray.200"
            borderWidth="5px"
            borderRadius="lg"
            borderColor="teal.400"
          >
            <Text>
              <strong>Title:</strong> {post.title}
            </Text>
            <Text>
              <strong>Content:</strong> {post.body}
            </Text>
            <Button
              colorScheme="teal"
              size="sm"
              m={3}
              onClick={() => setPostId(post.id)}
            >
              Show More
            </Button>
          </Box>
        ))
      )}
    </Container>
  );
}

export default App;
