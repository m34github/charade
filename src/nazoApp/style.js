const common = {
  article: {
    height: window.innerHeight
  }
};

const detail = {
  answer: {
    background: '#ccf',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
  contents: {
    padding: 12,
    textAlign: 'center'
  },
  content: {
    paddingTop: 12,
    paddingBottom: 12
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
  header: {
    border: '3px solid #fff',
    color: '#fff',
    padding: 12
  },
  titleSection: {
    background: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
};

const home = {
  image: {
    paddingTop: 12,
    paddingBottom: 12
  }
};

const upload = {
  button: {
    width: 320,
    textAlign: 'left'
  },
  divButton: {
    paddingTop: 36
  },
  input: {
    display: 'none'
  }
};

const style = {
  common, detail, home, upload
};

export default style;
