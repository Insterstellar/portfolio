# Contact Form Setup Instructions

Your portfolio now has a working contact form system! Follow these steps to complete the setup:

## Option 1: Web3Forms (Recommended - Free & Easy)

1. **Get Your Access Key**
   - Visit [https://web3forms.com](https://web3forms.com)
   - Click "Get Started for Free"
   - Enter your email: `mandyronald58@gmail.com`
   - Verify your email
   - Copy your Access Key

2. **Update the Form**
   - Open `index.html`
   - Find this line (around line 700):
     ```html
     <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
     ```
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

3. **Test the Form**
   - Open your website
   - Fill out the contact form
   - Submit it
   - Check your email (mandyronald58@gmail.com) for the message

## Features

✅ **No Backend Required** - Works with static hosting (GitHub Pages, Netlify, Vercel)
✅ **Spam Protection** - Built-in spam filtering
✅ **Email Notifications** - Receive submissions directly to your email
✅ **Free Tier** - 250 submissions/month (more than enough for a portfolio)
✅ **Custom Styling** - Already integrated with your site's design

## Alternative Options

### Option 2: Formspree
1. Visit [https://formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form
4. Update the form action in `index.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="post">
   ```

### Option 3: EmailJS
1. Visit [https://www.emailjs.com](https://www.emailjs.com)
2. Create an account
3. Set up email service
4. Add EmailJS SDK and configure

### Option 4: Backend Service (Advanced)
If you prefer a custom backend:
- Set up a server with Node.js/Express
- Use nodemailer or SendGrid
- Update form action to your API endpoint

## Current Setup

The contact form is already configured with:
- Form validation
- Loading states
- Success/error messages
- Responsive design
- Fallback to direct email if form fails

## Testing Locally

1. Open `index.html` in a browser
2. The form will show an error about configuration
3. Once you add your access key, it will work
4. Test by submitting a message

## Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify your access key is correct
3. Ensure email address is verified on Web3Forms
4. Check spam folder for test emails

---

**Current Contact Details:**
- Email: mandyronald58@gmail.com
- Phone: +47 904 26017
- Location: Bergen, Norway
