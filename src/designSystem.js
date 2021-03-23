export const sizes = {
  contentMaxWidth: '500px',
};

export const mq = {
  desktop: '@media screen and (min-width: 600px)',
};

export const colors = {
  black: '#000',
  white: '#FFF',
  border: '#888888',
  placeholder: '#888888',
  background: '#202020',
};

export const styles = {
  center: {
    paddingLeft: `calc((100vw - min(90vw, ${sizes.contentMaxWidth})) / 2)`,
    paddingRight: `calc((100vw - min(90vw, ${sizes.contentMaxWidth})) / 2)`,
  },
};
