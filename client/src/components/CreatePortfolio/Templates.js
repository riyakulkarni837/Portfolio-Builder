import React, { useState } from 'react';
import { GridList, GridListTile, ListSubheader, Box, Button, Modal, IconButton, Typography, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import titleData from './PortfolioTemplates/data/titleData';
import Header from '../Login/Header';

const Templates = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (template) => {
    navigate(template.templateFile);
  };

  const handlePreview = (url) => {
    setPreviewUrl(url);
  };

  const closePreview = () => {
    setPreviewUrl(null);
  };

  return (
    <>
    <Header/>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: 2,
      }}
    >
      {previewUrl && (
        <Modal
          open={true}
          onClose={closePreview}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '80%',
              height: '80%',
              backgroundColor: 'white',
              padding: 2,
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                color: 'black',
              }}
              onClick={closePreview}
            >
              
            </IconButton>
            <iframe
              src={previewUrl}
              title="Preview"
              style={{
                border: 'none',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Modal>
      )}
      <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <Typography variant="h4" align="center">
              Select a Template
            </Typography>
          </ListSubheader>
        </GridListTile>
      <GridList cellHeight='auto' spacing={30} sx={{ width: '50%' }}>
        
        {titleData.map((tile) => (
          <GridListTile 
            key={tile.img}
            style={{ marginTop: '50px' }}
          >
            <Card sx={{ width: 'auto', height: 'auto', margin: 'auto' }}>
              <CardMedia
                component="img"
                image={tile.img}
                alt={tile.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {tile.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handlePreview(tile.previewUrl)}
                  
                >
                  Preview
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleSelect(tile)}
                  sx={{ marginLeft: 1 }}
                >
                  Select
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </Box>
    </>
  );
};

export default Templates;
