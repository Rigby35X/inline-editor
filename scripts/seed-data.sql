-- Seed initial data for the Barkhaus inline editor

-- Insert sample users
INSERT INTO users (id, email, name, role) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'admin@barkhaus.com', 'Admin User', 'admin'),
    ('550e8400-e29b-41d4-a716-446655440002', 'editor@barkhaus.com', 'Content Editor', 'editor'),
    ('550e8400-e29b-41d4-a716-446655440003', 'manager@barkhaus.com', 'Marketing Manager', 'manager')
ON CONFLICT (email) DO NOTHING;

-- Insert initial website elements
INSERT INTO website_elements (id, type, content, styles, visible) VALUES
    ('hero-title', 'text', '{"content": "Welcome to Barkhaus"}', '{"textColor": "#1f2937", "fontSize": "3rem"}', true),
    ('hero-subtitle', 'text', '{"content": "Your premier pet care destination"}', '{"textColor": "#6b7280", "fontSize": "1.25rem"}', true),
    ('hero-cta', 'button', '{"content": "Book Now", "link": "/booking"}', '{"backgroundColor": "#3b82f6", "color": "#ffffff"}', true),
    ('about-title', 'text', '{"content": "About Our Services"}', '{"textColor": "#1f2937", "fontSize": "2.5rem"}', true),
    ('about-text', 'text', '{"content": "We provide exceptional care for your beloved pets with our experienced team and state-of-the-art facilities."}', '{"textColor": "#6b7280", "fontSize": "1.125rem"}', true),
    ('hero-section', 'section', '{}', '{"background": "#f8fafc", "opacity": 1}', true),
    ('about-section', 'section', '{}', '{"background": "#ffffff", "opacity": 1}', true)
ON CONFLICT (id) DO UPDATE SET
    content = EXCLUDED.content,
    styles = EXCLUDED.styles,
    updated_at = NOW();

-- Create initial versions for each element
INSERT INTO element_versions (element_id, version_number, content, styles, visible, user_id, is_current)
SELECT 
    id,
    1,
    content,
    styles,
    visible,
    '550e8400-e29b-41d4-a716-446655440001',
    true
FROM website_elements;
