import styled from 'styled-components'

export const HamburguerMenu = styled.div`
  position: relative;
  z-index: 999;

  .navbar-toggler {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #000;

    .icon {
      font-size: 22px;
    }

    &.active .icon {
      transform: rotate(90deg);
      transition: 0.3s;
    }
  }

  /* OFFCANVAS */
  .offcanvas {
    position: fixed;
    top: 0;
    left: -300px; /* fora da tela */
    width: 300px;
    height: 100vh;
    background: #fff;
    transition: left 0.3s ease;
    z-index: 1001;
    padding: 20px 15px;
    overflow-y: auto;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  }

  .offcanvas.show {
    left: 0; /* aparece */
  }

  .offcanvas-header h5 {
    margin: 0;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .offcanvas-body ul {
    margin-top: 20px;
    padding: 0;
    list-style: none;
  }

  .offcanvas-body li {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    cursor: pointer;
  }

  /* OVERLAY */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(26, 88, 54, 0.6);
    z-index: 1000;
  }
`
