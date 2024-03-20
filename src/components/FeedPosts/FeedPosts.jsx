import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
    const { isLoading, posts } = useGetFeedPosts();

    // Function to get the gold color
    const randomColor = Math.random() > 0.5 ? 'black' : 'gold';

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading &&
                [0, 1, 2].map((_, idx) => (
                    <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                        <Flex gap='2'>
                            <SkeletonCircle size='10' />
                            <VStack gap={2} alignItems={"flex-start"}>
                                <Skeleton height='10px' w={"200px"} />
                                <Skeleton height='10px' w={"200px"} />
                            </VStack>
                        </Flex>
                        <Skeleton w={"full"}>
                            <Box h={"400px"}>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))}

            {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
            {!isLoading && posts.length === 0 && (
                <Text fontSize="md" fontFamily="sans-serif" color={randomColor}>
                    Optimizations on this home page are currently under development. Please visit this site again from a PC/desktop to see the full functionality.
                    <Text color={randomColor}>
                        HADMUSOCIALS
                    </Text>
                </Text>
            )}
        </Container>
    );
};

export default FeedPosts;
