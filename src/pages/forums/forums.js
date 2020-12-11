import React from "react";
import { Box, CssBaseline } from "@material-ui/core";
import CategorySelection from "../../Components/Forums/CategorySelection";
import ThreadSelection from "../../Components/Forums/ThreadSelection";
import Navbar from "../../Components/Navbar/MainNavbar/Navbar";
import ThreadPost from "../../Components/Forums/ThreadPost";
import CreateThread from "../../Components/Forums/CreateThread";

export const ForumContext = React.createContext({});

const ForumProvider = ForumContext.Provider;

const forums = (props) => {
    const subcategory = props.location.state
        ? props.location.state.subcategory
        : {};
    const thread = props.location.state
        ? props.location.state.thread
            ? props.location.state.thread
            : {}
        : {};
    const { url } = props.match;
    var category = props.location.state
        ? props.location.state.category
        : undefined;
    if (!category)
        category = subcategory ? { title: subcategory.category } : {};
    var page = null;
    try {
        page = getPage(subcategory.title, thread.title, url);
    } catch (e) {
        console.error(e);
        return <div>Error</div>;
    }
    return (
        <>
            <Box>
                <CssBaseline />
                <Navbar title="Forums" />
                <ForumProvider
                    value={{
                        subcategory: subcategory,
                        thread: thread,
                        category: category,
                    }}
                >
                    {page}
                </ForumProvider>
            </Box>
        </>
    );
};

const getPage = (subcategory, thread, path) => {
    if (subcategory && thread) {
        return <ThreadPost />;
    } else if (thread) {
        throw new Error("Thread cannot be set without category");
    } else if (subcategory) {
        var arr = path.substring(1).split("/");
        if (arr.length === 3 && arr[2] === "create-thread") {
            return <CreateThread />;
        }
        return <ThreadSelection />;
    }
    return <CategorySelection />;
};

export default forums;
