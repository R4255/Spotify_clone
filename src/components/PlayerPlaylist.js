import React from 'react'
import './PlayerPlaylist.css'
const playlist = [
  {
      id: 1,
      title: 'Sugar',
      artist: 'V',
      duration: '3:45',
  },
  {
      id: 2,
      title: 'Memories',
      artist: 'Maroon 5',
      duration: '3:09',
  },
  {
      id: 3,
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      duration: '3:53',
  },
  {
      id: 4,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      duration: '3:20',
  },
  {
      id: 5,
      title: 'Levitating',
      artist: 'Dua Lipa',
      duration: '3:23',
  },
  {
      id: 6,
      title: 'Watermelon Sugar',
      artist: 'Harry Styles',
      duration: '2:54',
  },
  {
      id: 7,
      title: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      duration: '2:58',
  },
];
export default function PlayerPlaylist() {
  return (
    <div className='player-playlist-container'>
      <div className='player-playlist-header'>
        <div className='playlist-image-card'>

        </div>
        <div className='playlist-body'>
          <p>PLAYLIST</p>
          <h1>Best Of Mine</h1>
        </div>
      </div>
      <div className='playlist-list'>
        <div className='playlist-list-id'>
          #          
        </div>
        <div className='playlist-list-title'>
          TITLE
        </div>
        <div className='playlist-list-album'>
          ARTIST
        </div>
        <div className='playlist-list-duration'>
          DURATION
        </div>

      </div>
      <div className='playlist-list-container'>
        {
          playlist.map(item=>{
            return (
              <div className='playlist-list'>
                <div className='playlist-list-id'>
                  {item.id}  
                </div>
                <div className='playlist-list-title'>
                  {item.title}
                </div>
                <div className='playlist-list-album'>
                  {item.artist}
                </div>
                <div className='playlist-list-duration'>
                  {item.duration}
                </div>
              </div>
          )
          })
        }
      </div>
    </div>
  )
}
