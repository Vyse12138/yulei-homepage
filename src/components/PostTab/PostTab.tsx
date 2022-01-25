import { useState } from 'react'
import { Box, Typography, Link, useTheme } from '@mui/material'
import { MenuBook } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export default function PostTab({
  img,
  title,
  description,
  preview
}: {
  img: string
  title: string
  description: string
  preview: string
}) {
  const theme = useTheme()
  const [info, setInfo] = useState(false)
  const handleClick = () => {
    setInfo(e => !e)
  }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {info ? (
        <motion.div
          key={1}
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -90 }}
          transition={{ duration: 0.2, type: 'easeInOut' }}
        >
          <Box
            onClick={handleClick}
            sx={{
              width: '288px',
              height: '227px',
              marginBottom: '2rem',
              backgroundColor: 'background.paper',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? ' 0 10px 16px 0 rgb(180 180 180 / 20%), 0 6px 20px 0 rgb(180 180 180 / 19%)'
                  : ' 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
              borderRadius: '10px',
              padding: '1rem',
              boxSizing: 'border-box'
            }}
          >
            <Box
              sx={{
                height: '163px'
              }}
            >
              {' '}
              <Typography sx={{ marginBottom: '1rem' }}>
                {description}
              </Typography>
              {preview && (
                <Link
                  href={preview}
                  target='_blank'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'max-content'
                  }}
                >
                  <MenuBook sx={{ paddingRight: '5px' }} /> Read it here
                </Link>
              )}
            </Box>

            <Typography
              variant='h6'
              component='h3'
              sx={{
                textAlign: 'center',
                backgroundColor: 'inherit'
              }}
            >
              {title}
            </Typography>
          </Box>
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.1 }}
          key={2}
          initial={{ rotateY: -90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 90 }}
          transition={{ duration: 0.2, type: 'easeInOut' }}
        >
          <Box
            onClick={handleClick}
            sx={{
              width: '288px',
              marginBottom: '2rem',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '10px',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? ' 0 10px 16px 0 rgb(180 180 180 / 20%), 0 6px 20px 0 rgb(180 180 180 / 19%)'
                  : ' 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)'
            }}
          >
            <Image
              draggable={false}
              src={img}
              height='163px'
              width='288px'
              className='br-10'
              alt={title}
            />
            <Typography
              variant='h6'
              component='h3'
              sx={{
                textAlign: 'center',
                backgroundColor: 'inherit',
                padding: '1rem 0'
              }}
            >
              {title}
            </Typography>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
