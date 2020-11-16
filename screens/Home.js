import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Button,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UrlPreview from "../components/UrlPreview";

const example_data_loaded_from_link = {
    "contentType": "text/html; charset=utf-8",
    "description": "THE HEAVENS—Dutifully feigning interest as the celestial being recalled the incident,",
    "favicons": [
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_80,q_80,w_80/hq7i5rzg5pgrdok8epz2.png",
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_200,q_80,w_200/hq7i5rzg5pgrdok8epz2.png",
    ],
    "images": [
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/czc02rdgfm7cdc0cku25.jpg",
    ],
    "mediaType": "article",
    "siteName": "Entertainment",
    "title": "Alex Trebek Politely Listens To Lame Anecdote About Time Archangel Saw Bear",
    "url": "https://entertainment.theonion.com/alex-trebek-politely-listens-to-lame-anecdote-about-tim-1845621712",
    "videos": [],
} //stord in state and can send the required fields to the backend 

const Home = ({ }) => {
    const [text, setText] = useState(null)
    const [url, setUrl] = useState(null)
    const [data, setData] = useState(null)

    const onPressSend = () => {
        setUrl(text)
    }

    useEffect(() => {
        setText(null)
        //send data to backend
        console.log(data)
    }, [data])

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'always'}
            contentContainerStyle={styles.container}>

            {url && <UrlPreview
                onLoad={setData} //data loaded from link
                onError={() => alert('Cannot load the link. Please check your link.')}
                text={url} />
            }

            <View style={styles.placeholderContainer}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder={'Type Your Link Here...'}
                    placeholderTextColor={'grey'}
                    style={styles.placeholder}
                />
                <Button
                    disabled={!text}
                    onPress={onPressSend}
                    title={'Send'}
                    style={styles.button} />
            </View>
        </KeyboardAwareScrollView>
    )
};
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    placeholderContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    placeholder: {
        width: '80%',
        padding: 10,
        height: 40,
        backgroundColor: '#ebecf0',
        borderRadius: 10,
    },
    button: {
        padding: 8,
        borderRadius: 8,
    }
})