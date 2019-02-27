import React from 'react';
import { ListItem, List } from 'react-native-elements';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

export default function PressableList(props) {
    return (
        <List containerStyle={{ marginBottom: 20, width: '100%' }}>
            <FlatList
                data={props.data}
                renderItem={item => (
                    <ListItem
                        onPress={() => props.onPress(item.item[props.idProperty])}
                        title={props.renderTitle(item)}
                        leftIcon={{ name: item.item[props.iconProperty] }}
                    />
                )}
                keyExtractor={item => item[props.keyProperty]}
            />
        </List>
    )
};

PressableList.propTypes = {
    data: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
    idProperty: PropTypes.string.isRequired,
    renderTitle: PropTypes.func.isRequired,
    keyProperty: PropTypes.string.isRequired
};